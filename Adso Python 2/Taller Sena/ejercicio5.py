class Curso:
    def __init__(self, nombre_curso):
        self.nombre_curso = nombre_curso
        self.estudiantes = []
        
    def inscribir(self, nombre, edad):
        if edad > 15:
            self.estudiantes.append({"nombre": nombre, "edad": edad})
            print(f"Estudiante {nombre} inscrito exitosamente.")
        else:
            print(f"No se pudo inscribir a {nombre}: debe ser mayor de 15 años.")
            
    def listar_mayores_edad(self):
        return [e["nombre"] for e in self.estudiantes if e["edad"] > 18]


# Pruebas del Reto Integrador
print("--- Reto Integrador: Sistema de Inscripciones ---")
curso_python = Curso("Programación en Python")

curso_python.inscribir("Ana", 19)
curso_python.inscribir("Luis", 14)
curso_python.inscribir("Carlos", 17)
curso_python.inscribir("Sofia", 22)

mayores = curso_python.listar_mayores_edad()
print("Estudiantes mayores de 18 años:", mayores)
