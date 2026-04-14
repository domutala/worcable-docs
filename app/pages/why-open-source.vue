<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import _ from "lodash";

const { repository, contribueUrl, docHomePage } = useAppConfig();
const copy = useClipboard({});
const { tm, te, rt } = useI18n();

const whyOpenSourceIcons = {
  hero: { icon: "i-lucide-shield-check" },
  problem: { icon: "i-lucide-alert-triangle" },

  pillars: {
    ownership: { icon: "i-lucide-database" },
    no_lockin: { icon: "i-lucide-unlock" },
    transparency: { icon: "i-lucide-eye" },
    extensibility: { icon: "i-lucide-puzzle" },
  },

  comparison: {
    closed: { icon: "i-lucide-x-circle" },
    open: { icon: "i-lucide-check-circle" },
  },

  technical: {
    stack: { icon: "i-lucide-code-2" },
    deployment: { icon: "i-lucide-server" },
    api: { icon: "i-lucide-git-merge" },
  },

  vision: { icon: "i-lucide-brain-circuit" },
  cta: { icon: "i-lucide-rocket" },
};
</script>

<template>
  <Container :ui="{ content: 'min-h-' }">
    <u-container class="py-10 md:py-36 max-w-280">
      <UBadge
        color="primary"
        size="lg"
        variant="soft"
        class="mb-3 rounded-none"
      >
        <MDC :value="$t('pages.why_open_source.hero.badge')" unwrap="p" />
      </UBadge>

      <MDC
        :value="$t('pages.why_open_source.hero.title')"
        unwrap="p"
        tag="h1"
        class="text-3xl md:text-6xl font-bold mx-auto"
      />

      <MDC
        :value="$t('pages.why_open_source.hero.subtitle')"
        class="mt-5 text-xl mx-auto"
      />

      <div class="flex flex-wrap items-center gap-2">
        <u-button
          :to="
            $localePath({ name: 'docs-slug', params: { slug: 'get-started' } })
          "
          size="xl"
          color="primary"
          variant="solid"
          class="p-3 px-4 rounded-4xl"
          icon="i-lucide-rocket"
        >
          <!-- icon="i-lucide-newspaper" -->
          {{ $t("pages.why_open_source.hero.cta_primary") }}
        </u-button>
        <u-button
          :to="repository"
          target="_blank"
          size="xl"
          variant="solid"
          color="neutral"
          class="border-default p-3 px-4 rounded-4xl"
        >
          {{ $t("pages.why_open_source.hero.cta_secondary") }}
        </u-button>
      </div>
    </u-container>

    <div
      class="flex flex-wrap not-lg:flex-col lg:divide-x divide-y divide-default border-t border-default"
    >
      <div
        v-for="(pillar, code) in whyOpenSourceIcons.pillars"
        :key="code"
        class="border-default w-full lg:w-1/2 xl:w-1/4 group/link-anime px-5 md:px-10 py-5 flex flex-col gap-2 xl:border-b-0"
      >
        <div>
          <u-icon :name="pillar.icon" class="size-8 opacity-50" />
        </div>

        <div>
          <h3 class="text-xl font-">
            <MDC
              unwrap="p"
              :value="$t(`pages.why_open_source.pillars.items.${code}.title`)"
            />
          </h3>

          <p class="opacity-80 max-w-180">
            <MDC
              unwrap="p"
              :value="
                $t(`pages.why_open_source.pillars.items.${code}.description`)
              "
            />
          </p>
        </div>
      </div>
    </div>
  </Container>

  <Container>
    <div class="relative block px-5 md:px-10 py-8 md:py-20">
      <u-page-grid>
        <div class="lg:col-span-2 col-span-3 not-lg:order-1">
          <h2 class="font- text-2xl max-w-160">
            <MDC
              :value="$t('pages.why_open_source.problem.title')"
              unwrap="p"
            />
          </h2>

          <p class="mt-5 text-xl">
            <MDC :value="$t('pages.why_open_source.problem.description')" />
          </p>
        </div>

        <div
          class="flex justify-center not-lg:justify-start items-center not-lg:col-span-3"
        >
          <u-icon
            :name="whyOpenSourceIcons.problem.icon"
            class="size-16 md:size-24 opacity-20 text-red-500"
          />
        </div>
      </u-page-grid>
    </div>
  </Container>

  <Container>
    <div class="flex not-md:flex-col">
      <div class="w-full md:border-r not-md:border-b border-default">
        <div class="p-5 md:p-10">
          <h2 class="font- text-xl max-w-160">
            <MDC
              :value="$t('pages.why_open_source.comparison.items.open.title')"
              unwrap="p"
            />
          </h2>

          <div class="mt-3">
            <div
              v-for="(content, i) in $tm(
                'pages.why_open_source.comparison.items.open.points'
              )"
              :key="i"
              class="flex items-center gap-2 mb-3"
            >
              <u-icon name="i-lucide-check" class="text-success size-5" />

              <MDC :value="$rt(content)" unwrap="p" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="p-5 md:p-10">
          <h2 class="font- text-xl max-w-160">
            <MDC
              :value="$t('pages.why_open_source.comparison.items.closed.title')"
              unwrap="p"
            />
          </h2>

          <div class="mt-3">
            <div
              v-for="(content, i) in $tm(
                'pages.why_open_source.comparison.items.closed.points'
              )"
              :key="i"
              class="flex items-center gap-2 mb-3"
            >
              <u-icon name="i-lucide-x" class="text-error size-5" />

              <MDC :value="$rt(content)" unwrap="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
