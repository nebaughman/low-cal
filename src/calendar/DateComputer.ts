import moment from "moment"

/**
 * Reactive state class for computing dates within a month.
 */
export class DateComputer {

  with(current: any): DateComputer {
    this.current = current
    return this
  }

  private now: any = moment()

  get current(): string { return this.now.format("YYYYMMDD") }
  set current(date: string) { this.now = moment(date, "YYYYMMDD", true) }

  private locked: any = null

  set lockedMonth(yyyymm: string) {
    this.locked = moment(yyyymm, "YYYYMM", true)
  }

  get lockedMonth() {
    return this.locked?.format("YYYYMM")
  }

  get prevMonth(): any {
    return this.now.clone().subtract(1, "month")
  }

  get nextMonth(): any {
    return this.now.clone().add(1, "month")
  }

  get prevDay(): any {
    return this.now.clone().subtract(1, "day")
  }

  get nextDay(): any {
    return this.now.clone().add(1, "day")
  }

  isInMonth(date: string) {
    return moment(date).isSame(this.locked || this.now, "month")
  }

  /**
   * First of current month (as a moment)
   */
  private get firstOfMonth(): any {
    return this.locked ? this.locked.clone().date(1) : this.now.clone().date(1)
  }

  /**
   * Array of moments representing each day in the current month.
   * Notice: This also contains shoulder dates for prev/next month.
   * Warning: Never ever manipulate this array or its moments.
   */
  get daysInMonth(): any[] {
    let date = this.firstOfMonth.clone() // working date (mutable)
    const stop = date.clone().add(1, 'month').date(1) // first of next month
    while (date.day() > 0) date.subtract(1, 'day') // roll back to sunday
    const days = []
    while (date.isBefore(stop)) { // until end of month
      days.push(date.clone()) // add this date to calendar
      date.add(1, 'day')
    }
    while (date.day() < 6) { // until friday of last week in month
      days.push(date.clone())
      date.add(1, 'day')
    }
    if (date.day() == 6) days.push(date.clone())
    return days
  }
}
