# 9. Vehículo de una app de transporte
class Vehiculo:
    def __init__(self, placa, conductor, disponible=True):
        self.placa = placa
        self.conductor = conductor
        self.disponible = disponible
        
    def cambiar_estado(self):
        self.disponible = not self.disponible

auto = Vehiculo("XYZ-123", "Juan Pérez", True)
print(f"Vehículo {auto.placa} conducido por {auto.conductor} - Disponible: {auto.disponible}")
auto.cambiar_estado()
print(f"Estado cambiado - Disponible: {auto.disponible}")
auto.cambiar_estado()
print(f"Estado cambiado nuevamente - Disponible: {auto.disponible}")
