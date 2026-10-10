# Simulación de Inscripciones - Reto Integrador ADSO
class Curso:
    def __init__(self):
        self.estudiantes = []
        
    def inscribir(self, nombre, edad):
        if edad > 15:
            self.estudiantes.append({"nombre": nombre, "edad": edad})
            print(f"Estudiante {nombre} ({edad} años) inscrito con éxito.")
        else:
            print(f"No se pudo inscribir a {nombre} ({edad} años). Debe ser mayor de 15 años.")
            
    def listar_mayores_edad(self):
        return [e["nombre"] for e in self.estudiantes if e["edad"] > 18]

if __name__ == "__main__":
    curso_adso = Curso()
    curso_adso.inscribir("Carlos", 16)
    curso_adso.inscribir("Ana", 14)
    curso_adso.inscribir("Sofia", 20)
    
    print("Mayores de edad:", curso_adso.listar_mayores_edad())
