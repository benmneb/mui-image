import 'react-app-polyfill/ie11'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Image from '../.'
import ImageProps from '../src/types'

import TypeIt from 'typeit-react'

import {
  styled,
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
  Toolbar,
  useMediaQuery,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createSvgIcon } from '@mui/material/utils'

import '@fontsource/fira-code'

const theme = createTheme({
  typography: {
    fontFamily: ['Fira Code', 'monospace'].join(','),
  },
  palette: {
    primary: { main: '#2979ff' },
  },
})

const YarnIcon = createSvgIcon(
  <path d="M203.3174 174.0602ZM215.0795 166.7954C214.19 159.7776 208.2595 154.9344 200.6486 155.0332 189.2819 155.1815 179.7436 161.0625 173.4178 164.9668 170.9467 166.4988 168.8216 167.6355 166.9931 168.4757 167.3884 162.7429 167.0425 155.2309 164.0772 146.9776 160.4695 137.0934 155.6263 131.0147 152.1668 127.5058 156.1699 121.6741 161.6556 113.1737 164.2255 100.0278 166.4494 88.8093 165.7575 71.3637 160.6672 61.5784 159.6293 59.6015 157.8996 58.1683 155.7251 57.5753 154.8355 57.3282 153.1552 56.834 149.844 57.773 144.8525 47.444 143.1228 46.3568 141.7884 45.4672 139.0208 43.688 135.7591 43.2927 132.695 44.4293 128.5931 45.912 125.0842 49.8656 121.773 56.8834 121.2788 57.9212 120.834 58.9097 120.4386 59.8981 114.1622 60.3429 104.278 62.6162 95.9259 71.6602 94.888 72.7969 92.8618 73.6371 90.7367 74.4278L90.7861 74.4278C86.4371 75.9598 84.4602 79.5181 82.0386 85.9429 78.678 94.9375 82.1375 103.7838 85.5475 109.5166 80.9019 113.668 74.7243 120.2903 71.4625 128.0494 67.41 137.6371 66.9653 147.027 67.1135 152.1174 63.6541 155.7745 58.3166 162.644 57.7236 170.3537 56.9328 181.1274 60.8371 188.4417 62.5668 191.1104 63.061 191.9012 63.6046 192.5436 64.1977 193.1861 64 194.5205 63.9506 195.9537 64.2471 197.4363 64.8896 200.8958 67.0641 203.7127 70.3753 205.4919 76.8988 208.9514 85.9923 210.434 93.01 206.9251 95.5305 209.5938 100.1266 212.1637 108.4788 212.1637L108.973 212.1637C111.0981 212.1637 138.0819 210.7305 145.9398 208.8031 149.4486 207.9629 151.8703 206.4803 153.4517 205.1459 158.4927 203.5645 172.4293 198.8201 185.5753 190.3197 194.8664 184.2903 198.0788 183.0054 204.9977 181.3251 211.7189 179.6942 215.9197 173.566 215.0795 166.7954L215.0795 166.7954Z" />,
  'YarnIcon'
)

const NpmIcon = createSvgIcon(
  <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />,
  'NpmIcon'
)

const GitHubIcon = createSvgIcon(
  <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />,
  'GitHubIcon'
)

const CodeIcon = createSvgIcon(
  <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />,
  'CodeIcon'
)

const CodeOffIcon = createSvgIcon(
  <path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z" />,
  'CodeOffIcon'
)

const Line = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '0 8px',
  },
})

const ImageOutput = styled('article')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  overflow: 'hidden',
})

const DRAWER_WIDTH = 325
const DEFAULT_IMAGE = 674

const SHOW_LOADING = false
const ERROR_ICON = true
const HEIGHT = '100%'
const WIDTH = '100%'
const SHIFT = false
const DISTANCE = '100px'
const SHIFT_DURATION = undefined
const DURATION = 3000
const EASING = 'cubic-bezier(0.7, 0, 0.6, 1)'
const FIT = 'cover'
const BG_COLOR = 'inherit'

export default function Demo() {
  const [currentPhoto, setCurrentPhoto] = React.useState<number>(DEFAULT_IMAGE)
  const [showPhoto, setShowPhoto] = React.useState<boolean | string>(true)

  const [showLoading, setShowLoading] = React.useState<boolean>(SHOW_LOADING)
  const [errorIcon, setErrorIcon] = React.useState<boolean>(ERROR_ICON)
  const [height, setHeight] = React.useState<ImageProps['height']>(HEIGHT)
  const [width, setWidth] = React.useState<ImageProps['width']>(WIDTH)
  const [shift, setShift] = React.useState<ImageProps['shift']>(SHIFT)
  const [distance, setDistance] = React.useState<ImageProps['distance']>(
    DISTANCE
  )
  const [shiftDuration, setShiftDuration] = React.useState<
    ImageProps['shiftDuration']
  >(SHIFT_DURATION)
  const [duration, setDuration] = React.useState<number>(DURATION)
  const [easing, setEasing] = React.useState<ImageProps['easing']>(EASING)
  const [fit, setFit] = React.useState<ImageProps['fit']>(FIT)
  const [bgColor, setBgColor] = React.useState<ImageProps['bgColor']>(BG_COLOR)

  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false)

  const mobile = useMediaQuery('@media (max-width: 900px)')

  function getNewPhoto() {
    if (mobileOpen) setMobileOpen(false)
    const newPhoto = Math.floor(Math.random() * 1051)
    setShowPhoto(false)
    setCurrentPhoto(newPhoto)
    setTimeout(() => setShowPhoto(true), 100)
  }

  function refreshPhoto() {
    if (mobileOpen) setMobileOpen(false)
    setShowPhoto(false)
    setTimeout(() => setShowPhoto(true), 100)
  }

  function resetDefaults() {
    setShowLoading(SHOW_LOADING)
    setErrorIcon(ERROR_ICON)
    setHeight(HEIGHT)
    setWidth(WIDTH)
    setShift(SHIFT)
    setDistance(DISTANCE)
    setShiftDuration(SHIFT_DURATION)
    setDuration(DURATION)
    setEasing(EASING)
    setFit(FIT)
    setBgColor(BG_COLOR)
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {mobileOpen ? <CodeOffIcon /> : <CodeIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'inline-block' } }}
          >
            <TypeIt
              getBeforeInit={instance => {
                instance
                  .pause(3500)
                  .type('npm install mui-image')
                  .pause(1500)
                  .delete()
                  .type("import Image from 'mui-image'")

                return instance
              }}
              options={{ speed: 120, cursor: false }}
            />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'inline-block', md: 'none' } }}
          >
            mui-image
          </Typography>
          <Box display="flex">
            <IconButton
              onClick={() =>
                window.open('https://yarnpkg.com/package/mui-image')
              }
              color="inherit"
            >
              <YarnIcon
                viewBox="0 0 256 256"
                fontSize="large"
                color="inherit"
              />
            </IconButton>
            <IconButton
              onClick={() => window.open('https://npmjs.com/package/mui-image')}
              color="inherit"
            >
              <NpmIcon fontSize="large" color="inherit" />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open('https://github.com/benmneb/mui-image')
              }
              color="inherit"
            >
              <GitHubIcon fontSize="large" color="inherit" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={mobile ? 'temporary' : 'permanent'}
        open={mobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: DRAWER_WIDTH,
          maxWidth: '100vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            maxWidth: '100vw',
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Stack
          spacing={2}
          component="section"
          padding={2}
          sx={{ minWidth: '100%' }}
        >
          <Box component="div">{'<Image'}</Box>
          <Stack spacing={1} sx={{ pl: 2 }}>
            <Line component="div">
              src="https://picsum.photos/id/{currentPhoto}/2000"
            </Line>
            <Tooltip title="Any valid CSS `height` property" placement="right">
              <Line component="div">
                height="
                <TextField
                  variant="standard"
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                />
                "
              </Line>
            </Tooltip>
            <Tooltip title="Any valid CSS `width` property" placement="right">
              <Line component="div">
                width="
                <TextField
                  variant="standard"
                  value={width}
                  onChange={e => setWidth(e.target.value)}
                />
                "
              </Line>
            </Tooltip>
            <Tooltip
              title="Any valid CSS `object-fit` property"
              placement="right"
            >
              <Line component="div">
                fit=
                <Select
                  variant="standard"
                  value={fit}
                  onChange={e =>
                    setFit(
                      e.target.value as
                        | React.CSSProperties['objectFit']
                        | undefined
                    )
                  }
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem value="fill">"fill"</MenuItem>
                  <MenuItem value="contain">"contain"</MenuItem>
                  <MenuItem value="cover">"cover"</MenuItem>
                  <MenuItem value="none">"none"</MenuItem>
                  <MenuItem value="scale-down">"scale-down"</MenuItem>
                </Select>
              </Line>
            </Tooltip>
            <Tooltip
              title="Number of milliseconds the image takes to transition in"
              placement="right"
            >
              <Line component="div">
                duration={'{'}
                <TextField
                  variant="standard"
                  value={duration}
                  onChange={e => setDuration(Number(e.target.value))}
                />
                {'}'}
              </Line>
            </Tooltip>
            <Tooltip
              title="Any valid CSS `transition-timing-function` property"
              placement="right"
            >
              <Line component="div">
                easing=
                <Select
                  variant="standard"
                  value={easing}
                  onChange={e => setEasing(e.target.value)}
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem value="cubic-bezier(0.7, 0, 0.6, 1)">
                    "cubic-bezier(0.7, 0, 0.6, 1)"
                  </MenuItem>
                  <MenuItem value="ease">"ease"</MenuItem>
                  <MenuItem value="ease-in">"ease-in"</MenuItem>
                  <MenuItem value="ease-out">"ease-out"</MenuItem>
                  <MenuItem value="ease-in-out">"ease-in-out"</MenuItem>
                  <MenuItem value="linear">"linear"</MenuItem>
                </Select>
              </Line>
            </Tooltip>
            <Tooltip
              title="Once installed you can add a custom loading indicator"
              placement="right"
            >
              <Line component="div">
                showLoading=
                <FormControlLabel
                  sx={{ ml: 0 }}
                  control={
                    <Switch
                      checked={showLoading}
                      onChange={e => setShowLoading(e.target.checked)}
                    />
                  }
                  label={`{ ${showLoading} }`}
                  labelPlacement="start"
                />
              </Line>
            </Tooltip>
            <Tooltip
              title="Once installed you can add a custom error icon"
              placement="right"
            >
              <Line component="div">
                errorIcon=
                <FormControlLabel
                  sx={{ ml: 0 }}
                  control={
                    <Switch
                      checked={errorIcon}
                      onChange={e => setErrorIcon(e.target.checked)}
                    />
                  }
                  label={`{ ${errorIcon} }`}
                  labelPlacement="start"
                />
              </Line>
            </Tooltip>
            <Tooltip
              title="Direction to shift image as it appears"
              placement="right"
            >
              <Line component="div">
                shift=
                <Select
                  variant="standard"
                  value={shift || 'null'}
                  onChange={e =>
                    setShift(e.target.value as ImageProps['shift'])
                  }
                  sx={{ minWidth: 100 }}
                >
                  <MenuItem value={'null'}>{'{ null }'}</MenuItem>
                  <MenuItem value="top">"top"</MenuItem>
                  <MenuItem value="right">"right"</MenuItem>
                  <MenuItem value="bottom">"bottom"</MenuItem>
                  <MenuItem value="left">"left"</MenuItem>
                </Select>
              </Line>
            </Tooltip>
            <Tooltip
              title="Distance to shift the image as it appears. Any valid CSS `length` property"
              placement="right"
            >
              <Line component="div">
                distance="
                <TextField
                  variant="standard"
                  value={distance}
                  onChange={e => setDistance(e.target.value)}
                />
                "
              </Line>
            </Tooltip>
            <Tooltip
              title="Number of milliseconds the shift takes"
              placement="right"
            >
              <Line component="div">
                shiftDuration={'{'}
                <TextField
                  variant="standard"
                  value={shiftDuration || duration * 0.3}
                  onChange={e => setShiftDuration(Number(e.target.value))}
                />
                {'}'}
              </Line>
            </Tooltip>
            <Tooltip
              title="Color the image transitions in from. Any valid CSS `background-color` property"
              placement="right"
            >
              <Line component="div">
                bgColor="
                <TextField
                  variant="standard"
                  value={bgColor}
                  onChange={e => setBgColor(e.target.value)}
                />
                "
              </Line>
            </Tooltip>
          </Stack>
          <Box component="div">{'/>'}</Box>
          <Button
            disabled={showPhoto === 'refresh'}
            variant="contained"
            onClick={refreshPhoto}
            disableElevation
          >
            Refresh photo
          </Button>
          <Button
            disabled={showPhoto === 'new'}
            variant="outlined"
            onClick={getNewPhoto}
          >
            Random photo
          </Button>
          <Button onClick={resetDefaults}>Reset defaults</Button>
        </Stack>
      </Drawer>
      <Box component="section" sx={{ flexGrow: 1, backgroundColor: bgColor }}>
        <Toolbar />
        <ImageOutput
          sx={{
            maxHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
          }}
        >
          {showPhoto && (
            <Image
              src={`https://picsum.photos/id/${currentPhoto}/2000`}
              width={width}
              height={height}
              duration={duration}
              showLoading={showLoading}
              errorIcon={errorIcon}
              shift={shift}
              distance={distance}
              shiftDuration={shiftDuration}
              easing={easing}
              fit={fit}
              bgColor={bgColor}
            />
          )}
        </ImageOutput>
      </Box>
    </Box>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>,
  document.querySelector('#root')
)
