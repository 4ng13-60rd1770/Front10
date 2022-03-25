export const showCards = (data, container) => {


    data.forEach( card => {
        let {id, image, name, price, description } = card;
          container.innerHTML += `
         
              <div class="card d-inline-block m-4" style="width: 18rem;">
                  <img src="${image}" class="card-img-top w-70 d-block m-auto"
                      alt="...">
                  <div class="card-body">
                      <a id=${name} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary d-block m-auto">$${price}</a>
                  </div>
                  <div class="card-body">
                  <p class="card-text">Descripción <br> ${description}</p>
                </div>
              </div>
          `
      })
  }

