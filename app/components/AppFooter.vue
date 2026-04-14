<script setup lang="ts">
const { footer, links } = useAppConfig();
</script>

<template>
  <UFooter
    class="border-t-0"
    :ui="{
      bottom: 'py-3 lg:py-3  border-t border-default px-10',
      container: 'lg:items-start',
      left: 'items-start justify-start',
      right: 'items-start justify-start',
    }"
  >
    <div class="pt-10 pb-7">
      <div class="mb-10">
        <NuxtLink :to="$localePath(footer.to)" class="block">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </div>

      <div class="flex flex-wrap mx-auto gap-20">
        <div
          v-for="(group, g) in footer.groups"
          :key="g"
          class="flex flex-col gap-4"
        >
          <div class="text-sm opacity-50 mb-1">
            {{ $t(group.title) }}
          </div>
          <nuxt-link
            v-for="(link, l) in group.links"
            v-bind="link"
            :key="l"
            :to="link.to ? $localePath(link.to) : undefined"
          >
            {{ $t(link.label) }}
          </nuxt-link>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2 mt-8">
        <AppTheme />
        <AppLocale />
      </div>
    </div>

    <template #bottom>
      <div class="flex flex-wrap gap-1 items-center w-full">
        <div class="mr-auto">
          © {{ new Date().getFullYear() }}

          <u-link
            to="https://domutala.netlify.app"
            target="_blank"
            class="font-bold text-highlighted underline"
          >
            domutala
          </u-link>
        </div>

        <UButton
          v-for="(link, index) of links"
          :key="index"
          class="rounded-none border border-default"
          v-bind="{ color: 'neutral', variant: 'soft', ...link }"
        />
      </div>
    </template>
  </UFooter>
</template>
