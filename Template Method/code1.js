// Employee
class Employee {
  constructor () {

  }
  goToWork () {
    this.wash()
    this.prepareBag()
    this.goToCompany()
  }
  wash () {
    // wash
  }
  prepareBag () {
    // prepare bag
  }
  goToCompany () {
    // empty, leave the sub class to override
    // some go to company by bus, some take a tax, some on foot
  }
}