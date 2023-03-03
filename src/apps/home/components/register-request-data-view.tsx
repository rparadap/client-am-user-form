import {
  RegisterRequestDataContainerProps,
  RegisterRequestForm,
} from '../types';
import { Home } from '../main';
import { createSignal } from 'solid-js';

const RegisterRequestDataView = (
  props: RegisterRequestDataContainerProps<Home>
) => {
  const [formData, setFormData] = createSignal<RegisterRequestForm>({
    secondaryMail: '',
    phoneNumber: '',
    birthDate: '',
    genre: '',
    nacionality: '',
    maritalStatus: '',
    profession: '',
    province: '',
    canton: '',
    district: '',
    completeAddress: '',
    workRoute: '',
    birthPlace: '',
    shirtSize: '',
    pantsSize: '',
    shoeSize: '',
  });

  return (
    <>
      <form id="frmColaboratorRegister">
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Información Básica</h1>
              <div class="col-md-12 contend-box">
                <div class="row form-group">
                  <div class="col-6">
                    <label>1. Correo Secundario (Opcional)</label>
                    <input
                      type="text"
                      id="txtSecondaryMail"
                      class="form-control"
                      value={formData().secondaryMail}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.secondaryMail =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    ></input>
                  </div>
                  <div class="col-6">
                    <label>2. Número de Telefono</label>
                    <input
                      type="text"
                      id="txtPhoneNumber"
                      class="form-control"
                      value={formData().phoneNumber}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.phoneNumber =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-6">
                    <label>3. Fecha de Nacimiento</label>
                    <input
                      type="date"
                      id="txtBirthDate"
                      class="form-control"
                      value={formData().birthDate}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.birthDate =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    ></input>
                  </div>
                  <div class="col-6">
                    <label>4. Género</label>
                    <select
                      class="form-control"
                      id="selectGenre"
                      value={formData().genre}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.genre =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-6">
                    <label>5. Nacionalidad</label>
                    <select
                      class="form-control"
                      id="selectNacionality"
                      value={formData().nacionality}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.nacionality =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    ></select>
                  </div>
                  <div class="col-6">
                    <label>6. Estado Civil</label>
                    <select
                      class="form-control"
                      id="selectMaritalStatus"
                      value={formData().maritalStatus}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.maritalStatus =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    >
                      <option value="Soltero">Soltero(a)</option>
                      <option value="Casado">Casado(a)</option>
                      <option value="Divorciado">Divorciado(a)</option>
                    </select>
                  </div>
                </div>
                <div class="row form-group">
                  <div class="col-12">
                    <label>7. Profesión (Opcional)</label>
                    <select
                      class="form-control"
                      id="selectProfesion"
                      value={formData().profession}
                      oninput={(e) => {
                        setFormData((form) => {
                          form.profession =
                            (e.target as HTMLInputElement).value || '';

                          return form;
                        });
                      }}
                    >
                      <option value="Medico">Médico</option>
                      <option value="Profesor">Profesor</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Datos Adicionales</h1>
              <div class="col-md-12">
                <div class="row">
                  <div class="col-12">
                    <div class="contend-box ">
                      <div class="form-group">
                        <h5 class="card-title">Dirección del Colaborador</h5>
                      </div>
                      <div class="form-group">
                        <label for="input_selectProvincia">Provincia</label>
                        <select
                          class="form-control primary text-capitalize"
                          name="input_selectProvincia"
                          id="input_selectProvincia"
                          value={formData().province}
                          oninput={(e) => {
                            setFormData((form) => {
                              const selectedOption = (
                                e.target as HTMLSelectElement
                              ).selectedOptions[0];
                              form.province = selectedOption
                                ? selectedOption.textContent || ''
                                : '';

                              return form;
                            });
                          }}
                        ></select>
                      </div>
                      <div class="form-group">
                        <label for="input_selectCanton">Canton</label>
                        <select
                          class="form-control primary text-capitalize"
                          name="input_selectCanton"
                          style="width: 100%;"
                          id="input_selectCanton"
                          tabindex="-1"
                          aria-hidden="true"
                          value={formData().canton}
                          oninput={(e) => {
                            setFormData((form) => {
                              const selectedOption = (
                                e.target as HTMLSelectElement
                              ).selectedOptions[0];
                              form.canton = selectedOption
                                ? selectedOption.textContent || ''
                                : '';

                              return form;
                            });
                          }}
                        ></select>
                      </div>
                      <div class="form-group">
                        <label for="input_selectDistrito">Distrito</label>
                        <select
                          class="form-control primary text-capitalize"
                          name="input_selectDistrito"
                          style="width: 100%;"
                          id="input_selectDistrito"
                          tabindex="-1"
                          aria-hidden="true"
                          value={formData().district}
                          oninput={(e) => {
                            setFormData((form) => {
                              const selectedOption = (
                                e.target as HTMLSelectElement
                              ).selectedOptions[0];
                              form.district = selectedOption
                                ? selectedOption.textContent || ''
                                : '';

                              return form;
                            });
                          }}
                        ></select>
                      </div>
                      <div class="form-group">
                        <label for="input_direccionExacta">
                          Dirección Exacta
                        </label>
                        <textarea
                          name="input_direccionExacta"
                          class="form-control  "
                          placeholder="Dirección Exacta del colaborador"
                          id="input_direccionExacta"
                          value={formData().completeAddress}
                          oninput={(e) => {
                            setFormData((form) => {
                              form.completeAddress =
                                (e.target as HTMLInputElement).value || '';

                              return form;
                            });
                          }}
                        ></textarea>
                      </div>
                      <label for="input_rutaAlTrabajo">Otras direcciones</label>
                      <div class="form-group">
                        <label for="input_rutaAlTrabajo">Ruta al trabajo</label>
                        <textarea
                          name="input_rutaAlTrabajo"
                          class="form-control  "
                          placeholder="Ruta que toma para llegar al trabajo"
                          id="input_rutaAlTrabajo"
                          value={formData().workRoute}
                          oninput={(e) => {
                            setFormData((form) => {
                              form.workRoute =
                                (e.target as HTMLInputElement).value || '';

                              return form;
                            });
                          }}
                        ></textarea>
                      </div>

                      <div class="form-group">
                        <label for="input_lugarNacimiento">
                          Lugar de nacimiento
                        </label>
                        <textarea
                          name="input_lugarNacimiento"
                          class="form-control  "
                          placeholder="Lugar de nacimiento"
                          id="input_lugarNacimiento"
                          value={formData().birthPlace}
                          oninput={(e) => {
                            setFormData((form) => {
                              form.birthPlace =
                                (e.target as HTMLInputElement).value || '';

                              return form;
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="contend-box ">
                      <div class="form-group">
                        <h5 class="card-title">Talla de ropa</h5>
                      </div>
                      <div id="div_tallasSelect">
                        <div class="form-group">
                          <label for="input_tallaCamisa">Talla de Camisa</label>
                          <select
                            class="form-control primary text-capitalize tallasItem"
                            name="camisa"
                            id="camisa_select"
                            value={formData().shirtSize}
                            oninput={(e) => {
                              setFormData((form) => {
                                form.shirtSize =
                                  (e.target as HTMLSelectElement).value || '';

                                return form;
                              });
                            }}
                          >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="input_tallaCamisa">
                            Talla de Pantalon
                          </label>
                          <select
                            class="form-control primary text-capitalize tallasItem"
                            name="pantalon"
                            id="pantalon_select"
                            value={formData().pantsSize}
                            oninput={(e) => {
                              setFormData((form) => {
                                form.pantsSize =
                                  (e.target as HTMLSelectElement).value || '';

                                return form;
                              });
                            }}
                          >
                            <option value="28">28</option>
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                            <option value="42">42</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="input_tallaCamisa">
                            Talla de Zapatos
                          </label>
                          <select
                            class="form-control primary text-capitalize tallasItem"
                            name="zapatos"
                            id="zapatos_select"
                            value={formData().shoeSize}
                            oninput={(e) => {
                              setFormData((form) => {
                                form.shoeSize =
                                  (e.target as HTMLSelectElement).value || '';

                                return form;
                              });
                            }}
                          >
                            <option value="4.5">4.5</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="6.5">6.5</option>
                            <option value="7.5">7.5</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="10.5">10.5</option>
                            <option value="11">11</option>
                            <option value="11.5">11.5</option>
                            <option value="12.5">12.5</option>
                            <option value="13.5">13.5</option>
                            <option value="14.5">14.5</option>
                            <option value="15.5">15.5</option>
                            <option value="16">16</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Historial Académico</h1>
              <div class="col-12">
                <div class="contend-box">
                  <div class="form-group">
                    <h5 class="card-title">Escolaridad</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <button
                        type="button"
                        data-toggle="modal"
                        style=""
                        class="btn btn-primary "
                        onClick={() => {
                          props.onEdit.openCertificateModal();
                        }}
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contend-box" id="divRowTitles"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Carta De Recomendacion</h1>
              <div class="col-12">
                <div class="contend-box ">
                  <div class="form-group">
                    <h5 class="card-title">Recomendacion</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="padding-30 sm-padding-5 ">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            props.onEdit.openRecommendationModal();
                          }}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contend-box" id="divRowRecomendations"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">
                Registro De Hoja De Delincuencia
              </h1>
              <div class="col-12">
                <div class="contend-box ">
                  <div class="form-group">
                    <h5 class="card-title">Hoja de Delincuencia</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="padding-30 sm-padding-5 ">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            props.onEdit.openDelincuenceModal();
                          }}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contend-box" id="divRowDelincuence"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Registro de licencias</h1>
              <div class="col-12">
                <div class="contend-box ">
                  <div class="form-group">
                    <h5 class="card-title">Licencias</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="padding-30 sm-padding-5 ">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            props.onEdit.openLicenseModal();
                          }}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contend-box" id="divRowLicenses"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title twin-tittle">Miembros de la Familia</h1>
              <div class="col-12">
                <div class="contend-box ">
                  <div class="form-group">
                    <h5 class="card-title">Familiares</h5>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="padding-30 sm-padding-5 ">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => {
                            props.onEdit.openFamilyModal();
                          }}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="contend-box" id="divFamilyList">
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Fecha de Nacimiento</th>
                          <th>Teléfono</th>
                          <th>Parentesco</th>
                          <th>Acción</th>
                        </tr>
                      </thead>
                      <tbody id="bodySection"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <div class="col-md-12">
                <div style={{ 'text-align': 'center' }}>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={() => {
                      props.onEdit.saveFormData(formData());
                    }}
                  >
                    Guardar<i class="mdi mdi-disc ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegisterRequestDataView;
