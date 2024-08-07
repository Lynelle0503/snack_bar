
let toastbox = document.getElementById("toastBox");
let success_message = '<span class="material-symbols-outlined">check_circle</span>  Successfully submitted!';
let error_message = '<span class="material-symbols-outlined">cancel</span>  Error Received!';
let warning_message = '<span class="material-symbols-outlined">error</span>  Warning: Invalid input, Please check and retry.';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

    if(msg.includes('check_circle')){
        toast.classList.add('check-icon');
    }
    if(msg.includes('cancel')){
        toast.classList.add('cancel-icon');
    }
    if(msg.includes('error')){
        toast.classList.add('error-icon');
    }

    self.setTimeout(()=>{
        toast.remove();
    },3500);
}