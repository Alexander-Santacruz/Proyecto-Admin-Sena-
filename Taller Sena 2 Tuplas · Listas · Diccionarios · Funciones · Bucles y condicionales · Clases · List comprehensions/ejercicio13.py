class Curso:
    def __init__(self):
        self.estudiantes = []

    def inscribir(self, nombre, edad):
        if edad > 15:
            self.estudiantes.append({"nombre": nombre, "edad": edad})

    def listar_mayores_edad(self):
        return [e["nombre"] for e in self.estudiantes if e["edad"] > 18]
