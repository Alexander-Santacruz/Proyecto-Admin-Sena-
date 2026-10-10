class Vehiculo:
    def __init__(self, placa, conductor, disponible):
        self.placa = placa
        self.conductor = conductor
        self.disponible = disponible

    def cambiar_estado(self):
        self.disponible = not self.disponible
