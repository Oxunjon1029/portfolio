export default function smoothScroll(id){
  document.querySelector(`#${id}`).scrollIntoView({
      behavior: 'smooth',
  });
}