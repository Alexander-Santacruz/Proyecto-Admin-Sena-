class Cliente:
    def __init__(self, nombre, membresia_activa):
        self.nombre = nombre
        self.membresia_activa = membresia_activa

    def puede_entrenar(self):
        return self.membresia_activa
