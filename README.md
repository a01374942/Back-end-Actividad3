# Actividad 3 -- Back-End

## **Playlist MUSEOS**

### **Agregar Museo** 
Este metodo nos permite *agregar* a nuestra base de datos los *Museos* que desee el usuario
* Los museos se componen de los siguientes datos: 
   * *Nombre*
   * *Ubicación*
   * *Fecha*
   * *Descripción* 
* **end point**: *`/Museos/agregarMuseos`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Nombre": "Museo Soumaya",
    "Ubicacion": "CDMX",
    "Fecha": "1994",
    "Descripcion": "Conserva, resguarda e investiga la colección de arte y promueve exposiciones temporales"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*Es un dato obligatorio y debe ser un string entre 5 y 50 caracteres* |
| `Descripción` | *Debe ser un string entre 10 y 250 caracteres* |
| `Museo` | *El nombre del museo no debe de estar registrado* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El nombre debe de ser entre 5 y 50 caracteres* | 422 |
| `InvalidBodyException` | *La descripción debe de ser entre 10 y 250 caracteres* | 422 |
| `InvalidBodyException` | *El museo ya está registrado* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Correcta"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecto verifica"`
-------------------------------------------------
### **Actualizar Museo** 
Este metodo nos permite *actualizar* los datos en nuestra base de datos de los *Museos* que desee el usuario
* Se actualiza de acuerdo al *Nombre* del Museo, los datos que se pueden cambiar son los siguientes: 
   * *Ubicación*
   * *Fecha*
   * *Descripción* 
* **end point**: *`/Museos/actualizarMuseos`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Nombre": "Museo Soumaya",
    "actualizar": {
        "Ubicacion": "Ciudad de México",
        "Fecha": "1923"
      }
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*El museo debe de estar registrado* |
| `actualizar` | 	*La actualización debe ser dentro de este campo* |


* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El museo no está registrado en la base de datos* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Museo Actualizado"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecto verifica"`

-------------------------------------------------
### **Borrar Museo** 
Este metodo nos permite *borrar* toda la información del *Museo* 
* Se elimina de acuerdo al *Nombre* del Museo que queremos borrar
* **end point**: *`/Museos/borrarMuseos`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Nombre": "Museo Soumaya"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*El museo debe de estar registrado para poder eliminarlo* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `NameNotFound` | *El Museo no existe* | 500 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Museo Eliminado"`

* **respuesta con error:**
HTTP status 500 y el siguiente *mensaje*: `"operacion": "Museo no encontrado"`

-------------------------------------------------
### **Obtener Museos** 
Este metodo nos permite *obtener* toda la información en la base de datos de todos los *Museos* registrados 
* **end point**: *`/Museos/obtenerMuseos`*
* **método**: *`GET`*
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Route` | 	*La ruta de consulta debe ser correcta* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `RouteNotFound` | *La ruta de acceso no existe* | 500 |

* **respuesta:**
HTTP status 200 

  ```JSON
    [
      {
        "_id": "6189c22a2f1daf27d71f0edf",
        "Nombre": "Museo Soumaya",
        "Ubicacion": "Ciudad de México",
        "Fecha": "1994",
        "Descripcion": "Conserva, resguarda e investiga la colección de arte y promueve exposiciones temporales"
        "__v": 0
      }
    ]
  ```

## **Playlist PELICULAS**

### **Agregar Pelicula** 
Este metodo nos permite *agregar* a nuestra base de datos las *Peliculas* que desee el usuario
* Las peliculas deben de registrarse de con los siguientes datos: 
   * *Título*
   * *Año*
   * *Director*
   * *Duración* 
* **end point**: *`/Peliculas/agregarPeliculas`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Titulo": "Origen",
    "Anio": "2010",
    "Director": "Christoper Nolan",
    "Duracion": "2h10m"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Titulo` | 	*Es un dato obligatorio y debe ser un string entre 2 y 30 caracteres* |
| `Director` | *Debe ser un string entre 3 y 50 caracteres* |
| `Peliculas` | *El nombre de la pelicula no debe de estar registrada* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El título debe de ser entre 2 y 30 caracteres* | 422 |
| `InvalidBodyException` | *El nombre del director debe de ser entre 3 y 50 caracteres* | 422 |
| `InvalidBodyException` | *La pelicula ya está registrada* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Correcta"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecta verifica"`
-------------------------------------------------
### **Actualizar Pelicula** 
Este metodo nos permite *actualizar* los datos en nuestra base de datos de las *Peliculas* que desee el usuario
* Se actualiza de acuerdo al *Título* de la Pelicula, los datos que se pueden cambiar son los siguientes: 
   * *Año*
   * *Director*
   * *Duración* 
* **end point**: *`/Peliculas/actualizarPeliculas`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Titulo": "Interestellar",
    "actualizar":{
        "Anio": "2014",
        "Director": "Christoper Nolan",
        "Duracion": "2h49m"
        }
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Título` | 	*La pelicula debe de estar registrado* |
| `actualizar` | 	*La actualización debe ser dentro de este campo* |


* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *La pelicula no está registrada en la base de datos* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Pelicula Actualizada"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecto verifica"`

-------------------------------------------------
### **Borrar Pelicula** 
Este metodo nos permite *borrar* toda la información de la *Pelicula* 
* Se elimina de acuerdo al *Título* de la Pelicula que queremos borrar
* **end point**: *`/Peliculas/borrarPeliculas`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Titulo": "Origen"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Título` | 	*La pelicula debe de estar registrada para poder eliminarla* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `NameNotFound` | *La Pelicula no existe* | 500 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Pelicula Eliminada"`

* **respuesta con error:**
HTTP status 500 y el siguiente *mensaje*: `"operacion": "Pelicula no encontrada"`

-------------------------------------------------
### **Obtener Peliculas** 
Este metodo nos permite *obtener* toda la información en la base de datos de todas las *Peliculas* registradas 
* **end point**: *`/Peliculas/obtenerPeliculas`*
* **método**: *`GET`*
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Route` | 	*La ruta de consulta debe ser correcta* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `RouteNotFound` | *La ruta de acceso no existe* | 500 |

* **respuesta:**
HTTP status 200 

  ```JSON
    [
      {
        "_id": "61832c9406912fd756051dc5",
        "Titulo": "Interestellar",
        "Anio": "2014",
        "Director": "Christoper Nolan",
        "Duracion": "2h49m",
        "__v": 0
      }
    ]
  ```

