// get information about computer

function getCPUInfo () {
  return 'CPU info'
}

function getMemoryInfo () {
  return 'memory info'
}

// use 'facade pattern' to wrap a higher level api
function getComputerInfo () {
  return [getCPUInfo(), getComputerInfo()]
}