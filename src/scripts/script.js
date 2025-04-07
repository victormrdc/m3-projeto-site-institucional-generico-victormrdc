function handleModal() {
  const buttonModal = document.querySelector("#join-classes-1");
  const modalContainer = document.querySelector("#modalContainer");

  buttonModal.addEventListener("click", () => {
    modalContainer.showModal();

    closeModal();
  });
}

function handleModalTwo() {
  const buttonModal = document.querySelector("#get-into-next-class");
  const modalContainer = document.querySelector("#modalContainer");

  buttonModal.addEventListener("click", () => {
    modalContainer.showModal();

    closeModal();
  });
}

function closeModal() {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector("#modalContainer");

  button.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();

handleModalTwo();
