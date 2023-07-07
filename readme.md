# Ejercicio nodejs express mysql2
Ejercicio realizado con node.js para interactuar con una base de datos
## Modo de uso:
1. Clonar el repositorio en su dispositivo
2. Ingresar a la carpeta backend > scripts y seleccionar el archivo scriptDatabase 
3. Ejecutar paso a paso el archivo para crear la base de datos de manera local, para esto recuerde que primero debe seguir los siguientes pasos:
   - 3.1. Corrobore tener Apache y Mysql instalados y corriendo en su ordenador
   - 3.2. Ejecute el comando "mysql -u root -p;"
   - 3.3. Si no muestra ningun error, Ejecute el comando "SHOW DATABASES;" y asegurese de no tener ninguna base de datos con el nombre "db_prueba_backend_sql"
   - 3.4. Ahora ejecute uno a uno los comandos del archivo scriptDatabase
4. Revise que las configuraciones del archivo .env coincidan con las de su ordenador, si no es el caso cambielas
5. Abra un nuevo bloque de comandos desde el archivo del repositorio, si esta usando visual estudio puede hacerlo desde la pestaña terminal > new terminal
6. Con el comando "cd backend"  ingrese a la carpeta backend
7. Ejecute el comando "npm update"
8. Ejecute el comando "npm run dev"
9. La consola le mostrara la direccion http donde esta corriendo el servidor, la cual de manera predeterminada es "http://127.9.63.7:5000/testback"
10. Para interactuar con los enpoints es recomendable usar una extension como Thunder Client, para ello siga los siguientes pasos:
   - 10.1. Descarge la extension Thunder Client desde visual studio code
   - 10.2. En el panel izquierdo seleccione la extension Thunder Client y posteriormente en new request
   - 10.3. Coloque la url en el panel de direccion de Thunder Client con el endpoint especifico
   - 10.4. Seleccione el metodo de la peticion segun corresponda
   - 10.5. Si es un metodo POST envie un objeto en formato JSON con la informacion requerida en la pestaña body de Thunder Client
### Endpoints:
1. /allStorageNames:
   - UrlDefault: http://127.9.63.7:5000/testback/allStorageNames
   - Metodo: get
   - Descripcion: Endpoint que permite listar todas las bodegas alfabéticamente

2. /postBodegas:
   - UrlDefault: http://127.9.63.7:5000/testback/postBodegas
   - Metodo: post
   - Descripcion: Endpoint que permite crear una bodega
   - Body esperado:
     ```json
     {
         "ID": Entero Grande ej (63),
         "NOMBRE": Varchar ej ("Emily"),
         "RESPONSABLE": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
         "ESTADO": Entero ej (1),
         "CREADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
         "ACTUALIZADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
         "FECHA_CREACION": Date-Time ej ("2023-05-25 01:02:57"),
         "FECHA_ACTUALIZACION": Date-Time ej ("2023-05-25 01:02:57"),
         "FECHA_ELIMINACION": Date-Time ej ("2023-05-25 01:02:59")
     }
     ```

3. /allProducts:
   - UrlDefault: http://127.9.63.7:5000/testback/allProducts
   - Metodo: get
   - Descripcion: Endpoint que permite listar Productos en orden descendente según el total de ellos entre todas las bodegas

4. /newProduct:
   - UrlDefault: http://127.9.63.7:5000/testback/newProduct
   - Metodo: post
   - Descripcion: Endpoint que permite insertar un producto y asignar una cantidad inicial (10) del mismo en la tabla inventarios en la bodega 60 por defecto
   - Body esperado:
     ```json
     {
         "IDPRODUCTO": Entero Grande ej (184),
         "NOMBRE": Varchar ej ("Nombre del Producto"),
         "DESCRIPCION": Varchar ej ("Descripción del Producto"),
         "ESTADO": Entero ej (1),
         "CREADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
         "ACTUALIZADOR": Entero grande, debe coincidir con un id existente de la tabla users ej (11),
         "IDINVENTARIO":  Entero Grande ej (190)
     }
     ```

5. /newInventario:
   - UrlDefault: http://127.9.63.7:5000/testback/newInventario
   - Metodo: post
   - Descripcion: Endpoint que permite insertar un registro en la tabla inventarios, valida si la combinación bodega/producto existe
   - Body esperado:
     ```json
     {
         "ID_PRODUCTO": Entero Grande ej (11),
         "ID_BODEGA": Entero Grande ej (12),
         "CANTIDAD": Entero  ej (60)
     }
     ```
6. /trasBodega:
   - UrlDefault: http://127.9.63.7:5000/testback/trasBodega
   - Metodo: post
   - Descripcion: Endpoint que permite trasladar cantidades de un producto de una bodega a otra, ademas valida que la cantidad a trasladar exista en la bodega de donde sale
   - Body esperado:  
     ```json
     {
         "ID_PRODUCTO": Entero Grande ej (11),
         "ID_BODEGA1": (Bodega de donde sale) Entero Grande ej (12),
         "ID_BODEGA2": (Bodega a donde entra) Entero Grande ej (12),
         "CANTIDAD": Entero ej (60)
     }
     ```
Nota: Si desea ejecutar los ejemplos tenga en cuenta que puede que los id ya existan, sin embargo para hacerlo al enviar el objeto por el body unicamente deje depues de cada una de las propiedades del objeto los valores que se encuentran entre parentesis, mantenga las comillas si dichos valores las tienen.

# Creador: Andres David Elizalde Peralta

