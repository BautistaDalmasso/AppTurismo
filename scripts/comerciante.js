document.addEventListener('DOMContentLoaded', () => {
    const avisoForm = document.getElementById('aviso-form');

    avisoForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // evitar que el formulario se envíe de forma predeterminada

        const formData = new FormData(avisoForm);

        try {
            const response = await fetch('/crear-aviso', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Aviso creado exitosamente.');
                // redirigir al comerciante a otra pag después de crear el aviso.
            } else {
                alert('Error al crear el aviso. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Error al crear el aviso. Por favor, intenta nuevamente.');
        }
    });
});