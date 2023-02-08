<script>
    let saveFile = () => {
        
       
        const firtname = document.getElementById('txtName');
        const lastname = document.getElementById('txtLastName');
        const date = document.getElementById('txtDate');
        
        
        let data = 
            '\r First name: ' + firstname.value + ' \r\n ' + 
            'Last name: ' +lastname.value + ' \r\n ' + 
            'Date of birth: ' + date.value + ' \r\n ' + 
            
        
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formDataBase.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
</script>
</html>