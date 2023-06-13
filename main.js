document.querySelector('button').onclick = () => {
    document.querySelector('button').innerHTML = '<i class="fa-solid fa-circle-check"></i>Copied'

    navigator.clipboard.writeText('ㅤ')
    setTimeout(() => {
        document.querySelector('button').innerHTML = '<i class="fa-solid fa-clipboard"></i>Copy to clipboard'
    }, 2000)
}