<template>
	<file-upload-rectify :readonly="false" ref="fu" url="/File/Upload" extensions="pdf" :iamges="project.attachments" v-on:uploaded="uploaded" v-on:files-removed="otherRemove"></file-upload-rectify>
	
	<td><report-file-new ref="imgList" v-on:image-added="uploadedAccpCheck2($event)" :imgs="item.attachment2" :readonly="false"></report-file-new></td>
	<td v-if="item.attachment2 && item.attachment2.length > 0"><a :href="item.attachment2[0].url">{{item.attachment2[0].name}}</a></td>
	
	
</template>

<script>
	uploadedAccpCheck2: function (img) {
	            var self = this;
	            if (!self.item.attachment2 || self.item.attachment2.length === 0)
	                self.item.attachment2 = new Array(img);
	            else
	                self.item.attachment2[0] = img;
	            self.$forceUpdate();
	},
	uploaded: function (attachments) {
			    var self = this;
			    self.project.attachments.push(attachments);
	},
	otherRemove: function (attachments) {
	            var self = this;
	            self.project.attachments = self.project.attachments.filter(function (t) { return t.url !== attachments.url; });
	},
</script>

<style>
</style>