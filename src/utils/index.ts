import { ResultType } from '../store/reducer';

function toogleResults(resultArr: Array<ResultType>, result: ResultType) {
    // @ts-ignore
    const index = resultArr.findIndex(item => item.id === result.id);
    console.log(index, 'INDEX');

    if(index === -1) {
        return [...resultArr, result]
    } else {
        return resultArr.filter(item => item.answer_id !== result.answer_id)
    }
};

export {
    toogleResults
}