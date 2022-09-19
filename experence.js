

const tasks = [
    { id: '1', cost: 100 },
    { id: '2', cost: 100, dep: '4' },
    { id: '4', cost: 100, dep: '3' },
    { id: '3', cost: 100 },
];


function findMax (tasks) {
  let max = 0
  let maxArr = []
  for (let i = 0; i < tasks.length; i++) {
    let [imax, imaxArr] = findDep(tasks[i], tasks)
    if (imax > max) {
      max = imax
      maxArr = imaxArr
    }
  }
  return [max, maxArr.reverse()]
}

function findDep (task, tasks, arr = [], sum = 0) {
  sum += task.cost
  arr = [...arr, task.id]
  if (!task.dep) {
    return [sum, arr]
  }
  let preTask = tasks.find(item => item.id === task.dep)
  return findDep(preTask, tasks, arr, sum)
}
console.log(findMax(tasks))