<template>
  <div class="rounded-lg p-10 bg-granny-smith-apple dark:bg-indigo-dye">
    <div class="grid justify-center">
      <TitlesPage />
    </div>
    <div class="py-5 space-y-5">
      <div class="grid grid-cols-6 space-x-5">
        <div class="flex col-span-1 justify-center items-center">
          <img
            class="rounded max-w-2/4"
            src="https://avatars.githubusercontent.com/u/45635827?v=4"
            alt="Picture of IvanGodinez21"
          />
        </div>
        <div class="col-span-4">
          <p>
            Hello and welcome to my website, mi name is {{ person.fullName }}.
          </p>
          <p>
            I'm interested in learning programming languages and improve my
            basic skills!
          </p>
          <p>
            I'm currently studying Software Engineering, so I'm growing and
            learning step by step.
          </p>
        </div>
      </div>
      <div align="center">
        <h2 align="center">Listening to Spotify</h2>
        <a href="https://open.spotify.com/user/IvanGodinez21">
          <img
            src="https://spotify-badge-ivangodinez21.vercel.app/api/now-playing.svg"
            alt="Spotify Widget"
            height="auto"
          />
        </a>
      </div>
      <div>
        <h2 align="center">My stats</h2>
        <details open>
          <summary align="center">Based on my coding activity</summary>
          <br />
          <table align="center">
            <tr>
              <td align="center">Site</td>
              <td align="center" colspan="2">Widgets</td>
            </tr>
            <tr>
              <td align="center" rowspan="2">GitHub</td>
              <td align="center" colspan="2">
                <a href="#">
                  <img
                    src="https://github-profile-trophy.vercel.app/?username=ivangodinez21&theme=darkhub"
                    alt="Trophies"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td align="center">
                <a href="#">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=ivangodinez21&theme=gotham&show_icons=true&locale=en&count_private=true"
                    alt="Stats"
                  />
                </a>
              </td>
              <td align="center">
                <a href="#">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=ivangodinez21&theme=gotham&show_icons=true&locale=en"
                    alt="Top langs"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td align="center" rowspan="2">Codewars</td>
              <td align="center" colspan="2">
                <a>
                  <img
                    src="https://www.codewars.com/users/IvanGodinez21/badges/large"
                  />
                </a>
              </td>
            </tr>
          </table>
        </details>
      </div>
      <div>
        <h2 align="center">Referral links</h2>
        <details open>
          <summary align="center">Get incredible promotions</summary>
          <br />
          <table align="center">
            <tr>
              <td align="center">Platform</td>
              <td align="center">Button</td>
            </tr>
            <tr>
              <td align="center">Digital Ocean</td>
              <td align="center">
                <a
                  href="https://www.digitalocean.com/?refcode=5b92cc137819&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
                >
                  <img
                    src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
                    alt="DigitalOcean Referral Button"
                  />
                </a>
              </td>
            </tr>
          </table>
        </details>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import Person from '../typescript/classes/person';

export default {
  props: {
    person: {
      type: Object as PropType<Person>,
      required: false,
    },
  },
};
</script>
<style></style>
