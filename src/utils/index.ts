import { ResultType } from '../store/reducer';

function toogleResults(resultArr: Array<ResultType>, result: ResultType) {
    console.log(resultArr, 'resultArr');
    console.log(result, 'result');

    // @ts-ignore
    const index = resultArr.findIndex(item => item.question_id === result.question_id);
    console.log(index, 'INDEX');

    if(index === -1) {
        return [...resultArr, result]
    } else {
       return [...resultArr.filter(item => item.question_id !== result.question_id), result]
    }
};

export {
    toogleResults
}