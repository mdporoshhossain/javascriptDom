
function explainCallback(Name , age , task) {
    console.log(Name , 'hello');
    console.log(age , 'your age');
    task()
}

function takeSh() {
    console.log('work please');
}
explainCallback('Noman' , 23, takeSh);