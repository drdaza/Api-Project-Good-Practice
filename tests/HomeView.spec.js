import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import App from '../src/App.vue'
import { RouterLink, RouterView  } from "vue-router";
describe("HomeView", () => {
  it("opens 'Characters' when clicked", async () => {
    const wrapper = mount(App,{
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    } );
    const app = wrapper.find('header');
    console.log(app);
  });
});
