<script setup>
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
// import StarterKit from '@tiptap/starter-kit'

//TipTap Editor
const foo = ref(1);
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit, Color, TextStyle],
  editorProps: {
    attributes: {
      class:
        "border border-gray-500 p-4 shadow-lg bg-white min-h-[16rem] max-h-[16rem] overflow-y-auto focus:outline-none",
    },
  },
  onUpdate: ({ editor }) => {
    foo.value = editor.getHTML();
  },
  
});
</script>

<template>
    <!-- Editor Buttons -->
    <div
      class="flex flex-wrap justify-center items-start border border-gray-500 p-3 gap-2"
      v-if="editor"
    >
      <!--Bold Button-->
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-bold-rounded" class="h-6 w-6" />
      </button>
      <!--Italic Button-->
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-italic-rounded" class="h-6 w-6" />
      </button>
      <!--Strike Button-->
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-strikethrough-rounded" class="h-6 w-6" />
      </button>
      <!--Code Button-->
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        <Icon name="material-symbols:code-rounded" class="h-6 w-6" />
      </button>
      <!--Clear Marks Button-->
      <button @click="editor.chain().focus().unsetAllMarks().run()">
        <Icon name="material-symbols:clear-all-rounded" class="h-6 w-6" />
      </button>
      <!--Clear Nodes Button-->
      <button @click="editor.chain().focus().clearNodes().run()">
        <Icon name="material-symbols:delete-outline-rounded" class="h-6 w-6" />
      </button>
      <!--Paragraph Button-->
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <Icon name="material-symbols:format-paragraph-rounded" class="h-6 w-6" />
      </button>
      <!--Headings-->
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        h3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </button>

      <!--List Buttons-->
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
      <Icon name="material-symbols:format-list-bulleted-rounded" class="h-6 w-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <Icon name="material-symbols:format-list-numbered-rounded" class="h-6 w-6" />
      </button>

      <!--Code Block Button-->
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        <Icon name="material-symbols:code-off-rounded" class="h-6 w-6" />
      </button>
      <!--Blockquote Button-->
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <Icon name="material-symbols:format-quote-outline-rounded" class="h-6 w-6" />
      </button>
      <!--Horizontal Rule Button-->
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <Icon name="material-symbols:horizontal-rule-rounded" class="h-6 w-6" />
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        <Icon name="material-symbols:format-line-spacing-rounded" class="h-6 w-6" />
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <Icon name="material-symbols:undo-rounded" class="h-6 w-6" />
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <Icon name="material-symbols:redo-rounded" class="h-6 w-6" />
      </button>
    </div>
    <TiptapEditorContent :editor="editor" />


</template>

<style scoped>
/* Basic editor styles */

code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: #999;
  color: #616161;
  box-decoration-break: clone;
}
button {
  border: 1px solid rgb(107 114 128);
  border-radius: 0.375rem;
  padding: 0.5em;
  cursor: pointer;
}
.is-active {
  background-color: rgb(107 114 128);
  color: white;
}
</style>
