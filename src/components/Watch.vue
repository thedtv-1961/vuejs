<script>
export default {
    data() {
        return {
            name: "Ng Van A",
        };
    },
    methods: {
        kichHoatWatch() {
            this.name = "Ng Van B";
        },
    },
    computed: {
        lowerName() {
            return this.name.toLowerCase();
        },
    },
    watch: {
        // tên phải trùng vs data hoặc computed (vì computed cũng xuất ra data mà :D)
        name(newValue, oldValue) {
            console.log("Giá trị của `name` bị thay đổi");
            console.log("New value = " + newValue);
            console.log("Old value = " + oldValue);
        },
        // computed cũng bị thay đổi
        // muốn theo dõi computed thì name cũng phải bị thay đổi
        lowerName(newValue, oldValue) {
            console.log("Computed cũng bị thay đổi");
            console.log("New value = " + newValue);
            console.log("Old value = " + oldValue);
        },
    },
};
</script>

<template>
    <p>{{ name }}</p>
    <button @click="kichHoatWatch">Kich hoat watch</button>
    <p>Xem console</p>
</template>
