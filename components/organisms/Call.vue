<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 w-full justify-center items-center self-end bg-secondary h-auto mt-10"
  >
    <div
      class="flex-col justify-center items-center self-center w-full lg:w-2/3 py-6 md:col-span-2 px-6 md:ml-10 lg:ml-40"
    >
      <AtomsTitle name="Agende uma Reunião Conosco" color="blue" />

      <AtomsText
        content="Estamos entusiasmados com a possibilidade de fazer parte do crescimento e sucesso do seu negócio. Contate-nos agora mesmo para agendar uma reunião e descobrir como a TellCorp Tecnologia pode impulsionar a sua empresa rumo ao futuro."
      />
      <div class="flex justify-center">
        <AtomsButtonContact name="Entrar em Contato" color="blue" />
      </div>
    </div>
    <div class="hidden md:flex w-full md:w-60 lg:w-full ml-2">
      <img src="/img/pc.png" />
    </div>
  </div>
</template>
