<script setup lang="ts"></script>

<template>
  <UHeader
    class="border-b-0 bg-transparent"
    mode="slideover"
    :ui="{
      left: 'lg:flex-none',
      right: 'ml-auto',
      center: 'flex-1 ml-5',
      container: 'max-w-full justify-start',
      content: 'max-w-80 ui-scroll overflow-auto',
    }"
    :to="$localePath({ name: 'index' })"
  >
    <template #title>
      <AppLogo />
    </template>

    <AppMenu />

    <template #right>
      <div class="hidden sm:flex items-center gap-2">
        <UButton
          :to="
            $localePath({ name: 'docs-slug', params: { slug: 'deployment' } })
          "
          size="xl"
          variant="soft"
          color="neutral"
          class="rounded-4xl cursor-pointer border border-default"
        >
          {{ $t("header.get_started") }}
        </UButton>

        <UButton
          :to="$localePath({ name: 'book-demo' })"
          size="xl"
          variant="solid"
          color="primary"
          class="rounded-4xl cursor-pointer"
        >
          {{ $t("header.book_demo") }}
        </UButton>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col h-full">
        <AppMenu orientation="vertical" class="p-2.5" />

        <div class="flex items-center justify-center gap-3 mt-auto p-3">
          <UButton
            :to="
              $localePath({ name: 'docs-slug', params: { slug: 'deployment' } })
            "
            size="xl"
            variant="soft"
            color="neutral"
            class="rounded-4xl cursor-pointer border border-default"
          >
            {{ $t("header.get_started") }}
          </UButton>

          <UButton
            :to="$localePath({ name: 'book-demo' })"
            size="xl"
            variant="solid"
            color="primary"
            class="rounded-4xl cursor-pointer"
          >
            {{ $t("header.book_demo") }}
          </UButton>
        </div>
      </div>
    </template>
  </UHeader>
</template>
