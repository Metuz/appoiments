import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Nueva cita</h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input type="text" className="form-control" placeholder="Nombre Mascota" name="petName" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input type="text" className="form-control" placeholder="Nombre Dueño" name="ownerName" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="date" />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="hour" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea className="form-control" name="sythomps" placeholder="Describir sitomas"></textarea>
              </div>
            </div>
            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
