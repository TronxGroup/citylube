
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reserva-form');
  const success = document.querySelector('.form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const action = form.getAttribute('action');
      try {
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data
        });
        if (res.ok) {
          success.hidden = false;
          form.reset();
        } else {
          alert('No pudimos enviar tu solicitud. Escríbenos por WhatsApp, por favor.');
        }
      } catch (err) {
        alert('Error de red. Escríbenos por WhatsApp, por favor.');
      }
    });
  }
});
