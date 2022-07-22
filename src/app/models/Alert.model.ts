import Swal from 'sweetalert2';

export class LogoutAlert{
    fireLogoutAlert(){
        Swal.fire({
        text: "Are you sure you want to logout now?",
        icon: `warning`,
        showCancelButton: true,
        confirmButtonColor: `#d33`,
        cancelButtonColor: `#5cb85c`,
        confirmButtonText: `Yes`
        }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/";
        }
        })
    }
}