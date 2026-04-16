<script setup lang="ts"></script>

<template>
  <!-- <UContainer class="max-w-full px-0 sm:px-0 lg:px-0 min-h-screen relative">
  </UContainer> -->

  <UPage class="ui-docs-page min-h-screen bg-default">
    <Container :ui="{ container: 'min-h-screen', content: 'border-x-0' }">
      <template #left>
        <UPageAside
          :ui="{
            root: 'w-max',
            container: 'h-full flex flex-col max-w-70 ml-auto',
            topBody: 'px-0 mx-0',
            topHeader: 'px-0 mx-0',
            topFooter: 'px-0 mx-0',
          }"
          class="ui-scroll-hover w-full max-w-80 px-0 py-0 ms-0 h-screen lg:max-h-[unset] lg:top-0 relative lg:pe-0"
        >
          <div class="sticky top-0 z-10">
            <div
              class="h-(--ui-header-height) flex items-center px-5 bg-linear-to-b from-default to-transparent"
            >
              <u-button
                :to="$localePath({ name: 'index' })"
                icon="i-lucide-home"
                variant="ghost"
                color="neutral"
                square
              ></u-button>
            </div>
          </div>
          <DocNavigation class="pt-0 mt-5" />
        </UPageAside>
      </template>

      <Container
        :ui="{
          content: 'bg-default',
          root: 'sticky top-0 z-51',
        }"
      >
        <DocHeader />
      </Container>

      <slot />

      <Container>
        <AppFooter />
      </Container>

      <!-- <template #right>
        <div class="ml-auto xl:block hidden"></div>
      </template>
    </Container> -->
    </Container>
  </UPage>

  <ClientOnly>
    <LazyUContentSearch v-bind="$docs" />
  </ClientOnly>
</template>

<style lang="scss">
.ui-docs-page {
  --ui-sub-header-height: calc(var(--spacing) * 10);
  --ui-max-header-height: calc(
    var(--ui-header-height)
  ); //  + var(--ui-sub-header-height)
}

.ui-docs-aside {
  &::-webkit-scrollbar {
    width: 3px;
    transition: all 0.5s ease;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--ui-border);
  }

  &::-webkit-scrollbar-track {
    border-left: 1px solid var(--ui-border);
  }
}
</style>
