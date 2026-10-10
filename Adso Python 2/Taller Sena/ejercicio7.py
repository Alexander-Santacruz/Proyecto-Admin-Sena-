# 7. Sistema de reservas de un gimnasio
class Cliente:
    def __init__(self, nombre, membresia_activa):
        self.nombre = nombre
        self.membresia_activa = membresia_activa
        
    def puede_entrenar(self):
        return self.membresia_activa

cliente1 = Cliente("Carlos Pérez", True)
cliente2 = Cliente("María Gómez", False)

print(f"Cliente: {cliente1.nombre} - Puede entrenar: {cliente1.puede_entrenar()}")
print(f"Cliente: {cliente2.nombre} - Puede entrenar: {cliente2.puede_entrenar()}")
