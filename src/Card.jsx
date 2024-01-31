function Card(props){
    return <div class="col">
    <div class="card">
       
         <h4 class="my-0 fw-normal">{props.planName}</h4>
         </div>
          <div class="card-body">
      <h1 class="card-title
      pricing-card-title">
        ${props.price}<small
        class="text-boby-secondary
        fw-light">/mo</small>
        </h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li> <i className="bi-alarm"></i>{props.users}</li>
          <li>{props.storage}</li>
          <li>{props.project}</li>
          <li>{props.access}</li>
          <li>{props.project2}</li>
          <li>{props.support}</li>
          <li>{props.sub}</li>
          <li>{props.report}</li>
        </ul>
        <button
        type='button'
        class="w-100 btn btn-danger">BUTTON</button>
    </div>
    </div>
}

export default Card;