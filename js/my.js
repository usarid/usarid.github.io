window.my = function my(property, solicitation) 
{
  if (!(property in localStorage) || (localStorage[property] == "null"))
  {
    localStorage[property] = prompt(solicitation || 'Enter a value for ' + property);
  }
  return localStorage[property];
}