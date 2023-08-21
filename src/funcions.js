
import { Swal } from "sweetalert2";
import { withReactContent } from "sweetalert2-react-content";

export function show_alerta(mensaje, icono, foco) {
    onfocus(foco);
    const Mywal = withReactContent(Swal);
    Mywal.fire({
        title: mensaje,
        icon: icono
    })
}

function onfocus(foco) {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
}