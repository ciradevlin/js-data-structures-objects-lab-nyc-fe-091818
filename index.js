// Write your solution in this file!
const driver = {
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver.address = '11 Broadway'
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver.name = 'Sam'
driver.address = '11 Broadway'

}

