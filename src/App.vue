<script setup lang="ts">
</script>

<template>
	<div>
		<img src="./assets/images/jpg.jpg" alt="" style="width: 300px;">
		<img src="./assets/images/jpg.webp" alt="" style="width: 300px;">

		<table>
			<caption>.jpg .webp 압축률별 용량 비교</caption>

			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2" rowspan="2">jpg</th>
					<th colspan="7">webp</th>
				</tr>

				<tr>
					<th>Default</th>
					<th>100</th>
					<th>90</th>
					<th>80</th>
					<th>70</th>
					<th>60</th>
					<th>50</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>417KB</td>
					<td>244KB</td>
					<td>775KB</td>
					<td>458KB</td>
					<td>297KB</td>
					<td>229KB</td>
					<td>206KB</td>
					<td>187KB</td>
				</tr>

				<tr>
					<th>Default</th>
					<td>263KB</td>
					<td>226KB</td>
					<td>656KB</td>
					<td>388KB</td>
					<td>265KB</td>
					<td>214KB</td>
					<td>196KB</td>
					<td>178KB</td>
				</tr>

				<tr>
					<th>100</th>
					<td>868KB</td>
					<td>241KB</td>
					<td>771KB</td>
					<td>452KB</td>
					<td>293KB</td>
					<td>227KB</td>
					<td>203KB</td>
					<td>185KB</td>
				</tr>

				<tr>
					<th>90</th>
					<td>430KB</td>
					<td>229KB</td>
					<td>749KB</td>
					<td>431KB</td>
					<td>280KB</td>
					<td>219KB</td>
					<td>198KB</td>
					<td>181KB</td>
				</tr>

				<tr>
					<th>80</th>
					<td>281KB</td>
					<td>221KB</td>
					<td>666KB</td>
					<td>387KB</td>
					<td>264KB</td>
					<td>210KB</td>
					<td>193KB</td>
					<td>175KB</td>
				</tr>

				<tr>
					<th>70</th>
					<td>202KB</td>
					<td>201KB</td>
					<td>551KB</td>
					<td>329KB</td>
					<td>234KB</td>
					<td>191KB</td>
					<td>176KB</td>
					<td>160KB</td>
				</tr>

				<tr>
					<th>60</th>
					<td>166KB</td>
					<td>194KB</td>
					<td>518KB</td>
					<td>311KB</td>
					<td>224KB</td>
					<td>184KB</td>
					<td>170KB</td>
					<td>154KB</td>
				</tr>

				<tr>
					<th>50</th>
					<td>136KB</td>
					<td>180KB</td>
					<td>470KB</td>
					<td>285KB</td>
					<td>206KB</td>
					<td>173KB</td>
					<td>159KB</td>
					<td>143KB</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div>
		<img src="./assets/images/png1.png" alt="" style="width: 300px;">
		<img src="./assets/images/png1.webp" alt="" style="width: 300px;">

		<table>
			<caption>.png .webp 압축률별 용량 비교1</caption>

			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2" rowspan="2">png</th>
					<th colspan="7">webp</th>
				</tr>

				<tr>
					<th>Default</th>
					<th>100</th>
					<th>90</th>
					<th>80</th>
					<th>70</th>
					<th>60</th>
					<th>50</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>4.36MB</td>
					<td>1.44MB</td>
					<td>2.26MB</td>
					<td>1.79MB</td>
					<td>1.53MB</td>
					<td>1.41MB</td>
					<td>1.37MB</td>
					<td>1.32MB</td>
				</tr>

				<tr>
					<th>Default</th>
					<td>1.10MB</td>
					<td>1.47MB</td>
					<td>2.40MB</td>
					<td>1.87MB</td>
					<td>1.57MB</td>
					<td>1.44MB</td>
					<td>1.38KB</td>
					<td>1.33KB</td>
				</tr>

				<tr>
					<th>100</th>
					<td>4.36MB</td>
					<td>1.44MB</td>
					<td>2.26MB</td>
					<td>1.79MB</td>
					<td>1.53MB</td>
					<td>1.41MB</td>
					<td>1.37MB</td>
					<td>1.32MB</td>
				</tr>

				<tr>
					<th>90</th>
					<td>4.36MB</td>
					<td>1.44MB</td>
					<td>2.26MB</td>
					<td>1.79MB</td>
					<td>1.53MB</td>
					<td>1.41MB</td>
					<td>1.37MB</td>
					<td>1.32MB</td>
				</tr>

				<tr>
					<th>80</th>
					<td>1.10MB</td>
					<td>1.47MB</td>
					<td>2.40MB</td>
					<td>1.87MB</td>
					<td>1.57MB</td>
					<td>1.44MB</td>
					<td>1.38MB</td>
					<td>1.33MB</td>
				</tr>

				<tr>
					<th>70</th>
					<td>1.02MB</td>
					<td>1.44MB</td>
					<td>2.34MB</td>
					<td>1.82MB</td>
					<td>1.54MB</td>
					<td>1.42MB</td>
					<td>1.37MB</td>
					<td>1.32MB</td>
				</tr>

				<tr>
					<th>60</th>
					<td>896KB</td>
					<td>1.21MB</td>
					<td>2.10MB</td>
					<td>1.58MB</td>
					<td>1.31MB</td>
					<td>1.18MB</td>
					<td>1.13MB</td>
					<td>1.07MB</td>
				</tr>

				<tr>
					<th>50</th>
					<td>778KB</td>
					<td>1.11MB</td>
					<td>1.94MB</td>
					<td>1.45MB</td>
					<td>1.20MB</td>
					<td>1.08MB</td>
					<td>1.04MB</td>
					<td>0.99MB</td>
				</tr>
			</tbody>
		</table>
	</div>


	<div>
		<img src="./assets/images/png2.png" alt="" style="width: 300px;">
		<img src="./assets/images/png2.webp" alt="" style="width: 300px;">


		<table>
			<caption>.png .webp 압축률별 용량 비교2</caption>

			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2" rowspan="2">png</th>
					<th colspan="7">webp</th>
				</tr>

				<tr>
					<th>Default</th>
					<th>100</th>
					<th>90</th>
					<th>80</th>
					<th>70</th>
					<th>60</th>
					<th>50</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>838KB</td>
					<td>70.4KB</td>
					<td>197KB</td>
					<td>102KB</td>
					<td>76.7KB</td>
					<td>68KB</td>
					<td>65.3KB</td>
					<td>62.1KB</td>
				</tr>

				<tr>
					<th>Default</th>
					<td>341KB</td>
					<td>68.6KB</td>
					<td>221KB</td>
					<td>106KB</td>
					<td>75.7KB</td>
					<td>66.5KB</td>
					<td>63.0KB</td>
					<td>59.6KB</td>
				</tr>

				<tr>
					<th>100</th>
					<td>838KB</td>
					<td>70.4KB</td>
					<td>197KB</td>
					<td>102KB</td>
					<td>76.7KB</td>
					<td>68.0KB</td>
					<td>65.3KB</td>
					<td>62.1KB</td>
				</tr>

				<tr>
					<th>90</th>
					<td>270KB</td>
					<td>71.6KB</td>
					<td>254KB</td>
					<td>116KB</td>
					<td>80.3KB</td>
					<td>69.3B</td>
					<td>65.4KB</td>
					<td>61.8KB</td>
				</tr>

				<tr>
					<th>80</th>
					<td>218KB</td>
					<td>71.6KB</td>
					<td>298KB</td>
					<td>143KB</td>
					<td>82.2KB</td>
					<td>68.5KB</td>
					<td>63.9KB</td>
					<td>60.3KB</td>
				</tr>

				<tr>
					<th>70</th>
					<td>189KB</td>
					<td>76.2KB</td>
					<td>319KB</td>
					<td>164KB</td>
					<td>93.6KB</td>
					<td>72.2KB</td>
					<td>64.8KB</td>
					<td>59.5KB</td>
				</tr>

				<tr>
					<th>60</th>
					<td>181KB</td>
					<td>81.5KB</td>
					<td>323KB</td>
					<td>171KB</td>
					<td>101KB</td>
					<td>76.3KB</td>
					<td>68.0KB</td>
					<td>61.2KB</td>
				</tr>

				<tr>
					<th>50</th>
					<td>164KB</td>
					<td>93.6KB</td>
					<td>343KB</td>
					<td>200KB</td>
					<td>119KB</td>
					<td>86.6KB</td>
					<td>76.3KB</td>
					<td>67.5KB</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div>
		<img src="./assets/images/gif.gif" alt="" style="width: 200px;">

		<table>
			<caption>.gif 압축률별 용량 비교1</caption>

			<colgroup>
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2">gif</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>915KB</td>
				</tr>

				<tr>
					<th>1</th>
					<td>913KB</td>
				</tr>

				<tr>
					<th>2</th>
					<td>376KB</td>
				</tr>

				<tr>
					<th>3</th>
					<td>371KB</td>
				</tr>
			</tbody>
		</table>
	</div>


	<div>
		<img src="./assets/images/vue.svg" alt="" style="width: 200px;">

		<table>
			<caption>.svg 압축률별 용량 비교1</caption>

			<colgroup>
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2">svg</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>496B</td>
				</tr>

				<tr>
					<th>Default</th>
					<td>388B</td>
				</tr>
			</tbody>
		</table>
	</div>


	<div>
		<img src="/images/vite.svg" alt="" style="width: 200px;">

		<table>
			<caption>.svg 압축률별 용량 비교2</caption>

			<colgroup>
				<col />
				<col />
			</colgroup>

			<thead>
				<tr>
					<th colspan="2">svg</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<th>Origin</th>
					<td>1.46KB</td>
				</tr>

				<tr>
					<th>Default</th>
					<td>1.22KB</td>
				</tr>
			</tbody>
		</table>
	</div>

</template>

<style scoped>
div {text-align: left;margin-top: 40px;}
table th {padding: 5px 10px;background-color: #999;}
table td {padding: 5px 10px;border: 1px solid #ccc;}
</style>
