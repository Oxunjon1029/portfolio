export default function myFunction(id) {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById(`${id}`).style.background = 'black';
    document.getElementById(`${id}`).style.transition = 'all ease .6s';
    document.getElementById(`${id}`).style.zIndex = '1';
    document.getElementById(`${id}`).style.paddingTop = '10px';
  } else {
    document.getElementById(`${id}`).style.background = 'transparent';
    document.getElementById(`${id}`).style.zIndex = '1';
    document.getElementById(`${id}`).style.width = '100%';
    document.getElementById(`${id}`).style.paddingTop = '15px';
    document.getElementById(`${id}`).style.top = '0';
    document.getElementById(`${id}`).style.position = 'fixed';
    document.getElementById(`${id}`).style.transition = 'all ease .8s';
  }
}
