import {createSSRApp} from 'vue';

export function createApp() {
    return createSSRApp({
        data: () => ({
            count: 1,
            total: 1,
        }),
        template: `
          <div style="display: flex;">
            <button  @click="count++">{{ count }}</button>
            <button style="margin-left: 100px;width: 30px" @click="addTotal">{{ total }}</button>
          </div>`,
        methods: {
            addTotal() {
                this.total = this.count * 6
            }
        }
    });
}
