<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import { getBookDemoSchema } from "~~/server/shemas/contact";
import * as z from "zod";

const success = ref(false);
const submiting = ref(false);
const schema = getBookDemoSchema(Use.i18n.t);

type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  submiting.value = true;
  try {
    await $fetch("/api/book-demo", { method: "post", body: event.data });
    success.value = true;
  } catch (error) {
    OnFetchError(error);
  } finally {
    submiting.value = false;
  }
}
</script>

<template>
  <Container>
    <div class="py-15">
      <h1 class="text-3xl lg:text-5xl text-center">
        {{ $t("contacts.book_demo.title") }}
      </h1>
      <MDC
        :value="$t('contacts.book_demo.description')"
        class="text-center mt-2"
        unwrap="p"
        tag="p"
      />
    </div>
  </Container>

  <Container class="relative z-10">
    <u-container class="max-w-220">
      <div class="pt-20 pb-10 px-5 sm:px-10 relative">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField
            :label="$t('contacts.form.firstName.label')"
            name="firstName"
            required
          >
            <UInput
              v-model="state.firstName"
              :ui="{ base: 'p-3 rounded-0' }"
              class="w-full"
              size="xl"
              required
            />
          </UFormField>

          <UFormField
            :label="$t('contacts.form.lastName.label')"
            name="lastName"
            required
          >
            <UInput
              v-model="state.lastName"
              :ui="{ base: 'p-3 rounded-0' }"
              class="w-full"
              size="xl"
            />
          </UFormField>

          <UFormField
            :label="$t('contacts.form.email.label')"
            name="email"
            required
          >
            <UInput
              v-model="state.email"
              :ui="{ base: 'p-3 rounded-0' }"
              class="w-full"
              size="xl"
            />
          </UFormField>

          <UFormField
            :label="$t('contacts.form.companyName.label')"
            name="companyName"
            required
          >
            <UInput
              v-model="state.companyName"
              :ui="{ base: 'p-3 rounded-0' }"
              class="w-full"
              size="xl"
            />
          </UFormField>

          <UFormField
            :label="$t('contacts.form.companySize.label')"
            name="companySize"
            required
          >
            <USelect
              v-model="state.companySize"
              :ui="{ base: 'p-3 rounded-0' }"
              :items="
                schema.shape.companySize.options.map((size) => {
                  return {
                    value: size,
                    label: $t(`words.employes`, { prefix: size }),
                  };
                })
              "
              class="w-full"
              size="xl"
            />
          </UFormField>

          <template v-if="success">
            <u-icon name="i-lucide-check-check" class="size-6" />
            <MDC :value="$t('contacts.book_demo.success')" class="text-xl" />
          </template>
          <UButton
            v-else
            :loading="submiting"
            type="submit"
            class="cursor-pointer px-5 py-3"
            color="neutral"
            variant="dark"
            size="xl"
          >
            {{ $t("contacts.book_demo.submit") }}
          </UButton>
        </UForm>
      </div>
    </u-container>
  </Container>
</template>
