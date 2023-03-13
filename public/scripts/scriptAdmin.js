
const deletePost = async (id) => {
    const res = await fetch(`/Admin/post/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data.msg);
    window.location.reload();
};

const confirmDeletePost = (id) => {
    if (confirm('¿Estás segure de eliminar este Post?')) {
      deletePost(id);
    }
};

//Pociones
const deletePotion = async (id) => {
    const res = await fetch(`/Admin/potion/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data.msg);
    window.location.reload();
};

const confirmDeletePotions = (id) => {
    if (confirm('¿Estás segure de eliminar esta Poción?')) {
      deletePotion(id);
    }
};

//rituales

const deleteRitual = async (id) => {
    const res = await fetch(`/Admin/ritual/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data.msg);
    window.location.reload();
};

const confirmDeleteRituals = (id) => {
    if (confirm('¿Estás segure de eliminar este Ritual?')) {
      deleteRitual(id);
    }
};

//codigos
const deleteCodigo = async (id) => {
    const res = await fetch(`/Admin/codigo/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data.msg);
    window.location.reload();
};

const confirmDeleteCodigo = (id) => {
    if (confirm('¿Estás segure de eliminar este Codigo?')) {
      deleteCodigo(id);
    }
};

//mensajes
const deleteMensaje = async (id) => {
    const res = await fetch(`/Admin/mensaje/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    alert(data.msg);
    window.location.reload();
};

const confirmDeleteMensaje = (id) => {
    if (confirm('¿Estás segure de eliminar este Mensaje?')) {
      deleteMensaje(id);
    }
};

