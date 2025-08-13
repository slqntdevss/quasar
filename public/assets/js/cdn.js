const select = document.getElementById('cdn-switcher')
const saved = localStorage.getItem('cdnBase') || 'https://cdn.statically.io/gl/3kh0/3kh0-assets/main/'
select.value = saved

select.addEventListener('change', e => {
  let val = e.target.value
  if (!val.endsWith('/')) val += '/'
  localStorage.setItem('cdnBase', val)
  location.reload()
})