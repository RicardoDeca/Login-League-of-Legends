const username = document.querySelectorAll('input')[0]
        const password = document.querySelectorAll('input')[1]
        const btn = document.querySelectorAll('button')[3]
        function handleChange(){
            if(username.value && password.value.length>=8){
                btn.classList.add('btnON')
                btn.classList.remove('btnOFF')
            }else{
                btn.classList.add('btnOFF')
                btn.classList.remove('btnON')
                
            }
        }

        username.addEventListener('input',handleChange)
        password.addEventListener('input',handleChange)