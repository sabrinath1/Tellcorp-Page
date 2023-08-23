<script setup lang="ts">
const myList = ref([
  {
    title: "Sobre",
    items: [
      {
        label: "Quem Somos",
        key: "#about",
      },

      {
        label: "Nossos Diferenciais",
        key: "#differential",
      },
      {
        label: "Soluções",
        key: "#solutions",
      },
    ],
  },

  {
    title: "Contatos",
    items: [
      {
        label: "(15)98155-0048",
      },
      {
        label: "(15)98178-0015",
      },
      {
        label: "atendimento@tellcorpassessoria.com.br",
      },
    ],
  },
  {
    title: "Funcionamento",
    items: [
      {
        label: "Segunda á Sexta: ",
      },
      {
        label: "09:00 - 18:00 horas",
      },
    ],
  },
]);
const social = useSocialRedirect();
</script>

<template>
  <div class="flex w-full justify-start">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#3cc8c3"
        fill-opacity="1"
        d="M0,96L30,122.7C60,149,120,203,180,202.7C240,203,300,149,360,138.7C420,128,480,160,540,192C600,224,660,256,720,234.7C780,213,840,139,900,133.3C960,128,1020,192,1080,213.3C1140,235,1200,213,1260,181.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
  </div>
  <div
    class="px-4 py-12 mx-auto w-full sm:px-6 lg:px-16 bg-secondary xl:-mt-20"
  >
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="flex flex-col justify-center items-center my-3">
        <img
          class="w-40 xl:w-56 h-auto xl:-mt-20"
          src="/img/logotipo-vertical.png"
          alt="Logotipo Tellcorp Tecnologia"
        />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-12 xl:mt-0 xl:col-span-2 sm:justify-items-center mx-14 sm:mx-1"
      >
        <div
          class="flex-col md:grid md:grid-cols-1 md:gap-8"
          v-for="(i, index) in myList"
          :key="`title_${index}`"
        >
          <div class="flex flex-col">
            <h3 class="text-xl font-bold tracking-wider text-primary">
              {{ i.title }}
            </h3>
            <ul role="list" class="mt-4 space-y-2 text-lg">
              <li
                class=""
                v-for="(subItem, sbIndex) in i.items"
                :key="`item_${sbIndex}`"
              >
                <div class="flex">
                  <NuxtLink
                    :to="subItem.key"
                    class="text-base font-normal text-white hover:text-primary flex-row"
                  >
                    {{ subItem.label }}
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="px-5 py-5 mx-auto bg-primary w-full sm:px-6 md:flex md:items-center md:justify-between lg:px-20"
  >
    <div class="flex items-end space-x-4 mr-6">
      <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('whatsapp')"
      >
        <Icon name="mdi:whatsapp" class="text-secondary transition-all" />
      </button>
      <button
        class="hidden sm:flex"
        text
        style="font-size: 35px"
        @click="social.redirect('instagram')"
      >
        <Icon name="mdi:instagram" class="text-secondary transition-all" />
      </button>
    </div>

    <div
      class="flex justify-center space-x-6 md:order-first md:mb-0 text-white"
    >
      Todos os direitos reservados à Tellcorp Tecnologia
    </div>
  </div>
</template>
