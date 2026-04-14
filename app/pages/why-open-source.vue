<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import _ from "lodash";

const { repository, contribueUrl, docHomePage } = useAppConfig();
const copy = useClipboard({});

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
    <u-container class="py-36 max-w-280">
      <UBadge
        color="primary"
        size="lg"
        variant="soft"
        class="mb-3 rounded-none"
      >
        <MDC :value="$t('pages.why_open_source.hero.badge')" unwrap="p" />
      </UBadge>

      <h1 class="text-4xl md:text-6xl font-bold mx-auto">
        <MDC :value="$t('pages.why_open_source.hero.title')" unwrap="p" />
      </h1>

      <p class="mt-5 text-2xl mx-auto">
        <MDC :value="$t('pages.why_open_source.hero.subtitle')" unwrap="p" />
      </p>

      <div class="flex items-center gap-2 sm:flex-row flex-col pt-10">
        <u-button
          :to="
            $localePath({ name: 'docs-slug', params: { slug: 'deployment' } })
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
        class="border-default w-full lg:w-1/2 xl:w-1/4 group/link-anime px-10 py-5 flex flex-col gap-2"
      >
        <div>
          <u-icon :name="pillar.icon" class="size-8 opacity-50" />
        </div>

        <div>
          <h3 class="text-xl font-bold">
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
</template>
