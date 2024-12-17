Feature: Agreement - Gestión de propuestas de alquiler y servicios

  Background: 
    Dado que el demandante ha contactado al oferente por chat debido a su interés en una oferta

  # Happy path
  Scenario: El oferente crea una propuesta de alquiler
    Cuando el oferente crea una propuesta de alquiler completa
    Entonces el sistema debe permitir la revisión de la propuesta por parte del oferente
    Y debe enviar la propuesta como un mensaje de chat

  Scenario: El oferente crea una propuesta de servicios
    Cuando el oferente crea una propuesta de servicios completa
    Entonces el sistema debe permitir la revisión de la propuesta por parte del oferente
    Y debe enviar la propuesta como un mensaje de chat

  Scenario: La propuesta vence
    Dado que se ha creado una propuesta con una validez de 8 días
    Cuando el demandante intenta aceptarla en el día 9
    Entonces el sistema debe indicar que la propuesta ha vencido

  Scenario: Actualización de propuesta
    Dado que ya se ha creado una propuesta previa
    Cuando el oferente crea una nueva propuesta en el chat
    Entonces el sistema debe ofrecer la propuesta actualizada
    Y no debe ofrecer la propuesta anterior

  Scenario: Propuesta aceptada por un demandante diferente
    Dado que un oferente ha creado y enviado una propuesta a varios demandantes
    Y uno de ellos acepta la propuesta
    Entonces el sistema debe indicar a los demás que la propuesta ya no está disponible
    Y no debe modificar la información del demandante en la propuesta aceptada
