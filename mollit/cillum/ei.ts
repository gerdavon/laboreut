// Set the 'datetime' attribute to the current year
function setYearAttribute(element: HTMLElement, year: string): void {
  element.setAttribute('datetime', year);
}

// Assuming 'year' is an HTML element and 'thisYear' is a string variable representing the current year
const yearElement: HTMLElement = document.getElementById('year');
const thisYear: string = new Date().getFullYear().toString();

setYearAttribute(yearElement, thisYear);
