<template>
  <div>HomePage {{ t("title") }}</div>
</template>

<script setup lang="ts">
import { CampaignApi } from "@/core/apis";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
onMounted(async () => {
  await CampaignApi.v1GetCampaignListPost({
    page: { page_no: 0, size: 50 },
    options: {
      campaign_status: "OnGoing",
      user_campaign_status: "All",
      name_like: "",
    },
  });
});
const { t } = useI18n();
</script>
